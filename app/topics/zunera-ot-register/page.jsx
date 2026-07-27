import ZuneraOtRegisterKeywordPage, { generateMetadata } from './zunera-ot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtRegisterKeywordPage />;
}
