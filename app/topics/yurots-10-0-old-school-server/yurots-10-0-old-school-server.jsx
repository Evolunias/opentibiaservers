import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-10-0-old-school-server');
}

export default function Yurots100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-10-0-old-school-server" />;
}
