import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-10-98-old-school-server');
}

export default function Yurots1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-10-98-old-school-server" />;
}
