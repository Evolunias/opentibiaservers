import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-old-school-server-usa');
}

export default function YurotsOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="yurots-old-school-server-usa" />;
}
