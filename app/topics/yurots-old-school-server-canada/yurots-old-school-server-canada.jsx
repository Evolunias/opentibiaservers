import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-old-school-server-canada');
}

export default function YurotsOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="yurots-old-school-server-canada" />;
}
