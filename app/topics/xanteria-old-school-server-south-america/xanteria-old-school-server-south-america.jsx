import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-old-school-server-south-america');
}

export default function XanteriaOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-old-school-server-south-america" />;
}
