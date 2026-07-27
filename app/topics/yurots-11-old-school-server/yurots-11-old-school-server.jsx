import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-11-old-school-server');
}

export default function Yurots11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-11-old-school-server" />;
}
