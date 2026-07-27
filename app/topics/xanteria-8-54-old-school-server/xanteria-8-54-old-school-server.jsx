import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-54-old-school-server');
}

export default function Xanteria854OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-54-old-school-server" />;
}
