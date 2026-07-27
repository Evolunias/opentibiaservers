import XanteriaTrailerKeywordPage, { generateMetadata } from './xanteria-trailer';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaTrailerKeywordPage />;
}
