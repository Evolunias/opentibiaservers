import XanteriaOpenTibiaKeywordPage, { generateMetadata } from './xanteria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaOpenTibiaKeywordPage />;
}
