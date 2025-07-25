export function getTrimmedContent(
  content: string,
  charLimit: number
): JSX.Element[] {
  const paragraphs = content.split(/\n+/);
  const output: JSX.Element[] = [];
  let remaining = charLimit;

  for (let i = 0; i < paragraphs.length; i++) {
    const para = paragraphs[i].trim();
    if (!para) continue;

    if (para.length <= remaining) {
      output.push(<p key={i}>{para}</p>);
      remaining -= para.length;
    } else {
      const snippet = para.slice(0, remaining);
      output.push(<p key={i}>{snippet}...</p>);
      return output;
    }
  }
  return output;
}
