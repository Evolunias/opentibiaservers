import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-11-old-school-server');
}

export default function ZuneraOt11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-11-old-school-server" />;
}
