import ZuneraOtOpenTibiaKeywordPage, { generateMetadata } from './zunera-ot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtOpenTibiaKeywordPage />;
}
