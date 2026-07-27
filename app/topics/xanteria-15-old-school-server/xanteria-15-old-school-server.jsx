import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-15-old-school-server');
}

export default function Xanteria15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-15-old-school-server" />;
}
