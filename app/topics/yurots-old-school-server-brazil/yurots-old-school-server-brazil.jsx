import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-old-school-server-brazil');
}

export default function YurotsOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="yurots-old-school-server-brazil" />;
}
