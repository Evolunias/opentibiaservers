import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-72-old-school-server');
}

export default function Xanteria772OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-72-old-school-server" />;
}
