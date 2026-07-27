import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-9-6-old-school-server');
}

export default function Xanteria96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-9-6-old-school-server" />;
}
