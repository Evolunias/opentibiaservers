import ZezeniaOnlineCustomMapServerBrazilKeywordPage, { generateMetadata } from './zezenia-online-custom-map-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineCustomMapServerBrazilKeywordPage />;
}
