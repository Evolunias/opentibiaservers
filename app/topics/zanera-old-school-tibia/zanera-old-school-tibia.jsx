import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zanera-old-school-tibia');
}

export default function ZaneraOldSchoolTibiaKeywordPage() {
  return <StaticKeywordPage slug="zanera-old-school-tibia" />;
}
