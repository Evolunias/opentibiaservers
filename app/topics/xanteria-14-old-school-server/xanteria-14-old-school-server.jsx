import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-14-old-school-server');
}

export default function Xanteria14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-14-old-school-server" />;
}
