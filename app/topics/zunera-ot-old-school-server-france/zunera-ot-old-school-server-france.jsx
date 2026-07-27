import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-old-school-server-france');
}

export default function ZuneraOtOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-old-school-server-france" />;
}
