import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-old-school-server-latin-america');
}

export default function XanteriaOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-old-school-server-latin-america" />;
}
