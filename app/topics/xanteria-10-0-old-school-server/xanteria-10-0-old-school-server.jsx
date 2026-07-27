import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-10-0-old-school-server');
}

export default function Xanteria100OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-10-0-old-school-server" />;
}
