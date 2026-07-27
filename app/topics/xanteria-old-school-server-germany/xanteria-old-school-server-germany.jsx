import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-old-school-server-germany');
}

export default function XanteriaOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="xanteria-old-school-server-germany" />;
}
