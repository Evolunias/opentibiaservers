import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-6-old-school-server');
}

export default function Yurots76OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-6-old-school-server" />;
}
