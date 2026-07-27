import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-old-school-server-argentina');
}

export default function XanteriaOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-old-school-server-argentina" />;
}
