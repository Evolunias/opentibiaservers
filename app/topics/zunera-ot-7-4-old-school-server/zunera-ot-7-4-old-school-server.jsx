import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-7-4-old-school-server');
}

export default function ZuneraOt74OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-7-4-old-school-server" />;
}
