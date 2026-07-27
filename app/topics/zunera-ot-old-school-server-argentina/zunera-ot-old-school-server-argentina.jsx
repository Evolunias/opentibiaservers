import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-old-school-server-argentina');
}

export default function ZuneraOtOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-old-school-server-argentina" />;
}
