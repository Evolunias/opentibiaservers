import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-0-old-school-server');
}

export default function Yurots80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-0-old-school-server" />;
}
