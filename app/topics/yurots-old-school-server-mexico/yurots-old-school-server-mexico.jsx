import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-old-school-server-mexico');
}

export default function YurotsOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="yurots-old-school-server-mexico" />;
}
