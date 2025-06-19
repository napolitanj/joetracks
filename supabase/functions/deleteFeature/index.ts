import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = Deno.env.get("PROJECT_URL")!;
const supabaseKey = Deno.env.get("SERVICE_ROLE_KEY")!;
const supabase = createClient(supabaseUrl, supabaseKey);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("OK", { headers: corsHeaders });
  }

  try {
    const { id } = await req.json();

    if (!id) {
      return new Response(JSON.stringify({ error: "Missing feature ID" }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    const { data: feature, error: fetchError } = await supabase
      .from("features")
      .select("image_url")
      .eq("id", id)
      .single();

    if (fetchError || !feature) {
      return new Response(
        JSON.stringify({
          error: "Failed to fetch feature",
          details: fetchError,
        }),
        { status: 404, headers: corsHeaders }
      );
    }

    const imageUrl = feature.image_url;
    if (imageUrl) {
      const path = imageUrl.split(
        "/storage/v1/object/public/portfolio-images/"
      )[1];
      if (path) {
        await supabase.storage.from("portfolio-images").remove([path]);
      }
    }

    const { error: deleteError } = await supabase
      .from("features")
      .delete()
      .eq("id", id);

    if (deleteError) {
      return new Response(
        JSON.stringify({
          error: "Failed to delete feature",
          details: deleteError,
        }),
        { status: 500, headers: corsHeaders }
      );
    }

    return new Response(
      JSON.stringify({ message: "Feature and image deleted successfully" }),
      { status: 200, headers: corsHeaders }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({ error: "Unexpected error", details: e.message }),
      { status: 500, headers: corsHeaders }
    );
  }
});
