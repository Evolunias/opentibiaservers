import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-old-school-server-latin-america');
}

export default function YurotsOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-old-school-server-latin-america" />;
}
