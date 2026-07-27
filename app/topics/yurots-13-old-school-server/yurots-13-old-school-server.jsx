import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-13-old-school-server');
}

export default function Yurots13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-13-old-school-server" />;
}
