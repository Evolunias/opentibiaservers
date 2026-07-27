import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-12-old-school-server');
}

export default function Yurots12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-12-old-school-server" />;
}
