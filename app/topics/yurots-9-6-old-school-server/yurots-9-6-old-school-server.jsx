import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-9-6-old-school-server');
}

export default function Yurots96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-9-6-old-school-server" />;
}
