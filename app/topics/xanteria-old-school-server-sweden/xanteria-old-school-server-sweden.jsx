import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-old-school-server-sweden');
}

export default function XanteriaOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="xanteria-old-school-server-sweden" />;
}
