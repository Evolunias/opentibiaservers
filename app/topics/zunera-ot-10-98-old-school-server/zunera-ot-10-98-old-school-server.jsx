import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-10-98-old-school-server');
}

export default function ZuneraOt1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-10-98-old-school-server" />;
}
