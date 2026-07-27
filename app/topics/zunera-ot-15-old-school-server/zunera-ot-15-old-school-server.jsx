import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-15-old-school-server');
}

export default function ZuneraOt15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-15-old-school-server" />;
}
