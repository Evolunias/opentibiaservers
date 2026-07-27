import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-15-old-school-server');
}

export default function Yurots15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-15-old-school-server" />;
}
