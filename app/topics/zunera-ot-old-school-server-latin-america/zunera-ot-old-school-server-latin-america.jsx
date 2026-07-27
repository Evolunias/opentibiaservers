import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-old-school-server-latin-america');
}

export default function ZuneraOtOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-old-school-server-latin-america" />;
}
