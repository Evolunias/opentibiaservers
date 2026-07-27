import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-54-old-school-server');
}

export default function Yurots854OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-54-old-school-server" />;
}
