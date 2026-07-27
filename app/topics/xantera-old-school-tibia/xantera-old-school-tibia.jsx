import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xantera-old-school-tibia');
}

export default function XanteraOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="xantera-old-school-tibia" />;
}
