import ZezeniaOnlineSeasonalServerFranceKeywordPage, { generateMetadata } from './zezenia-online-seasonal-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineSeasonalServerFranceKeywordPage />;
}
