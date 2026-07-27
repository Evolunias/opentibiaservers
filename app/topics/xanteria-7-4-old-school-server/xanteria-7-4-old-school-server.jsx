import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-4-old-school-server');
}

export default function Xanteria74OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-4-old-school-server" />;
}
