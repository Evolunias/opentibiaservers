import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-14-old-school-server');
}

export default function ZuneraOt14OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-14-old-school-server" />;
}
