import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-old-school-server-uk');
}

export default function YurotsOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="yurots-old-school-server-uk" />;
}
