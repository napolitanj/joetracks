import "/src/styles/shared.css";
import "/src/styles/origin.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const OriginExpeditions = () => {
  return (
    <>
      <Helmet>
        <title>Origin Expeditions (2018–2021) | JoeTracks</title>
        <meta
          name="description"
          content="Origin Expeditions was a nonprofit wilderness education program focused on self-discovery, leadership, and land stewardship for youth. This page preserves its story and remaining resources."
        />
        <link rel="canonical" href="https://joetracks.com/origin-expeditions" />
        <meta
          property="og:title"
          content="Origin Expeditions – Wilderness Education Archive"
        />
        <meta
          property="og:description"
          content="From 2018 to 2021, Origin Expeditions ran immersive backcountry programs for youth. Explore the archived mission, blog, and surviving digital guides here."
        />
        <meta
          property="og:image"
          content="https://joetracks.com/images/north-manitou/manitou-header.webp"
        />
        <meta
          property="og:url"
          content="https://joetracks.com/origin-expeditions"
        />
      </Helmet>
      <div
        className="origin-landing"
        style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}
      >
        <h1>Origin Expeditions (2018–2021): Final Update</h1>
        <p style={{ fontStyle: "italic", marginBottom: "1rem" }}>
          An independent wilderness education nonprofit founded and directed by
          Joe Napolitan
        </p>

        <section>
          <p>
            From 2018 to 2021, Origin Expeditions ran backcountry programs for
            youth focused on self-discovery, leadership, and land stewardship.
            Like many small organizations, we were heavily impacted by the
            pandemic — and after a period of dormancy, the project has now been
            formally closed.
          </p>
        </section>

        <section>
          <h2>Thank You</h2>
          <p>
            To the students, families, guides, schools, and donors who supported
            Origin: thank you. This was a grassroots effort from start to
            finish, and it wouldn’t have existed without you.
          </p>
        </section>
        <section>
          <h2>Transfer of Assets</h2>
          <p>
            As part of formally closing down the organization, I’m in the
            process of donating remaining gear to another nonprofit that can put
            them to good use. Once that transfer is complete, I’ll update this
            page with the details.
          </p>
        </section>
        <section>
          <h2>What Lives On</h2>
          <p>
            Several of the digital guides we created are still available for
            public use. These were designed to help outdoor enthusiasts trips.
          </p>
          <ul>
            <li>
              <a
                href="https://joetracks.com/north-manitou-island-guide"
                target="_blank"
                rel="noopener noreferrer"
              >
                North Manitou Island Guide
              </a>
            </li>
            <li>
              <a
                href="https://joetracks.com/ski-mount-sneffels"
                target="_blank"
                rel="noopener noreferrer"
              >
                How To Ski Mount Sneffels
              </a>
            </li>
            <li>
              <a
                href="https://joetracks.com/caltopo-guide"
                target="_blank"
                rel="noopener noreferrer"
              >
                How To Use CalTopo
              </a>
            </li>

            <li>
              <a
                href="https://joetracks.com/remote-forecasting-tools"
                target="_blank"
                rel="noopener noreferrer"
              >
                Remote Forecasting Tools for Planning Trips in Snow
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2>Want to Learn More?</h2>
          <p>
            If you're curious about Origin’s writing, program messaging, or blog
            content, you can view samples in my{" "}
            <Link to="/writing">writing portfolio.</Link>
          </p>
          <p>
            If you’re interested in starting a wilderness program of your own
            and would like input, feedback, or support, feel free to reach out.
            I’ve added a <Link to="/contact">contact page</Link> on this site
            for exactly that reason — I’m always happy to help others carry this
            kind of work forward.
          </p>
        </section>

        <section>
          <p style={{ marginTop: "2rem" }}>
            Thanks again to everyone who helped build this — in big ways and
            small. The organization is offline, but the spirit of the work lives
            on.
          </p>
        </section>
      </div>
    </>
  );
};

export default OriginExpeditions;
