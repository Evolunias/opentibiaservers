import XanteriaRealMapServerChileKeywordPage, { generateMetadata } from './xanteria-real-map-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaRealMapServerChileKeywordPage />;
}
