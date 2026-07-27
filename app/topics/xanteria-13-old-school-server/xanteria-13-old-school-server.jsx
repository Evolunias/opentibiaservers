import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-13-old-school-server');
}

export default function Xanteria13OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-13-old-school-server" />;
}
