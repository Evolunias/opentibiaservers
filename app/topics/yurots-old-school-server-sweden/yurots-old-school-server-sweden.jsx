import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-old-school-server-sweden');
}

export default function YurotsOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="yurots-old-school-server-sweden" />;
}
