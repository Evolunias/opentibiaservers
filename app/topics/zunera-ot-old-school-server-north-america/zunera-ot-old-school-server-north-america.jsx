import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-old-school-server-north-america');
}

export default function ZuneraOtOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-old-school-server-north-america" />;
}
