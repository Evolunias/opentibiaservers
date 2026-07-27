import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-old-school-server-poland');
}

export default function XanteriaOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="xanteria-old-school-server-poland" />;
}
