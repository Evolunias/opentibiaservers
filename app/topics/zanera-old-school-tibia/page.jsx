import ZaneraOldSchoolTibiaKeywordPage, { generateMetadata } from './zanera-old-school-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZaneraOldSchoolTibiaKeywordPage />;
}
