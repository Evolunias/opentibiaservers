import ZuneraOtPrivateServerKeywordPage, { generateMetadata } from './zunera-ot-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtPrivateServerKeywordPage />;
}
